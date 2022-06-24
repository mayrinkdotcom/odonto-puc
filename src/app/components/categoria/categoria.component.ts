import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  categorias:any[] = [];
  constructor(private categoriaService: CategoriaService) { }
  ngOnInit(): void {
    this.categoriaService.getAllCategories().subscribe(
      result => {
        this.categorias = result.categories;
      }
    );
  }
  categoriaForm = new FormGroup({
    nome: new FormControl(null, [
      Validators.required
    ]),
    tipo: new FormControl(null, [
      Validators.required
    ]),
    CategoriaPrincipal: new FormControl([])
  });
  salvar():void {
    if (this.categoriaForm.value) {
      console.log(this.categoriaForm.value);
      const a = this.categoriaService.createCategorie(this.categoriaForm.value.nome, this.categoriaForm.value.tipo).subscribe(res => {
        console.log(res);
      });
      location.reload()
    }


  }

  

}
