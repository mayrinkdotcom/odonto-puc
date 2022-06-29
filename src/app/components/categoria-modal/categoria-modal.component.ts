import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoriaData } from '../categorias-cadastradas/categorias-cadastradas.component';

@Component({
  selector: 'app-categoria-modal',
  templateUrl: './categoria-modal.component.html',
  styleUrls: ['./categoria-modal.component.scss']
})
export class CategoriaModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CategoriaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoriaData,
    private categoriaService: CategoriaService,
  ) {}
  categoriaForm = new FormGroup({
    nome: new FormControl(this.data.categoria.title, [
      Validators.required
    ]),
    tipo: new FormControl(this.data.categoria.type, [
      Validators.required
    ]),
    CategoriaPrincipal: new FormControl([])
  });
  salvarEdicao(): void {
    this.data.categoria.title = this.categoriaForm.value.nome;
    this.data.categoria.tipo = this.categoriaForm.value.tipo;
    this.categoriaService.updateCategorie(this.data.categoria.id, this.data.categoria).subscribe();
    this.dialogRef.close();
    // location.reload()
  }
  ngOnInit(): void {
  }

}
