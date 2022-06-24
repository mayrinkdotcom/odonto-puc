import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaModalComponent } from '../categoria-modal/categoria-modal.component';

export interface CategoriaData {
  categoria: any;
  id: string;
}

@Component({
  selector: 'app-categorias-cadastradas',
  templateUrl: './categorias-cadastradas.component.html',
  styleUrls: ['./categorias-cadastradas.component.scss']
})
export class CategoriasCadastradasComponent implements OnInit {
  constructor(private categoriaService: CategoriaService, public dialog: MatDialog) { }
  panelOpenState = false;
  categorias: any[] = [];
  subcategorias: any[] = [];
  edit = false;
  Tipo: any;
  TipoCategoria;
  openDialog(categoria): void {
    const dialogRef = this.dialog.open(CategoriaModalComponent, {
      width: '250px',
      data: {
        id: categoria.id,
        categoria: categoria
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit(): void {
    this.categoriaService.getAllCategories().subscribe(
      result => {
        this.categorias = result.categories;
        this.TipoCategoria = "categoria"
      }
    );
  }
  excluir(id): void {
    this.categoriaService.deleteCategorie(id).subscribe(
      result => {
        console.log(result);
      }
    );
    location.reload()
  }

}
