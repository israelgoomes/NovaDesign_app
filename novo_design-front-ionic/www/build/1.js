webpackJsonp([1],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheProjetoPageModule", function() { return DetalheProjetoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_projeto__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalheProjetoPageModule = /** @class */ (function () {
    function DetalheProjetoPageModule() {
    }
    DetalheProjetoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhe_projeto__["a" /* DetalheProjetoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhe_projeto__["a" /* DetalheProjetoPage */]),
            ],
        })
    ], DetalheProjetoPageModule);
    return DetalheProjetoPageModule;
}());

//# sourceMappingURL=detalhe-projeto.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return projetoModel; });
var projetoModel = /** @class */ (function () {
    function projetoModel() {
    }
    return projetoModel;
}());

/* nomeCliente: {trim: true, required: true, type: String, index: true},
    telefone: {trim:true, requried: true, type: String},
    email: {type: String},
    rua: {type: String, required: true},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true, index: true},
    tituloProjeto: {trim: true, required: true, index: true, type: String },
    descricaoProjeto: {type: String, required: true},
    cep: {type: String, required: true},
    preco: {type: Number},
    foto: {type: String}, */ 
//# sourceMappingURL=projetoModel.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheProjetoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_projetoModel__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetalheProjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheProjetoPage = /** @class */ (function () {
    function DetalheProjetoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var projeto = this.navParams.get('_projeto');
        if (projeto) {
            this.projeto = projeto;
        }
        else {
            this.projeto = new __WEBPACK_IMPORTED_MODULE_2__app_models_projetoModel__["a" /* projetoModel */]();
        }
    }
    DetalheProjetoPage.prototype.addOrEdit = function () {
        this.navCtrl.push('AdmProjetoPage', { _projeto: this.projeto });
        console.log('Enviando o Projeto', this.projeto);
    };
    DetalheProjetoPage.prototype.ionViewDidLoad = function () {
        this.projeto = this.navParams.get('_projeto');
        console.log('ionViewDidLoad DetalheProjetoPage');
    };
    DetalheProjetoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhe-projeto',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\projetos\detalhe-projeto\detalhe-projeto.html"*/'<!--\n  Generated template for the DetalheProjetoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Detalhes do projeto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button block (click)="addOrEdit(cliente)">Editar</button>\n\n  <ion-card>\n    <ion-card-content >\n   <p> Projeto: {{projeto.tituloProjeto}}</p> <br/>\n   <p> Descrição: {{projeto.descricaoProjeto}}</p> <br/>\n   <p> Valor: {{projeto.preco}}</p> <br/>\n   <p> Cliente: {{projeto.nomeCliente}}</p> <br/>\n   <p> Email: {{projeto.email}}</p> <br/>\n   <p> Telefone: {{projeto.telefone}}</p> <br/>\n   <p> Endereço: {{projeto.rua}}</p> <br/>\n   <p> Cidade: {{projeto.cidade}}</p> <br/>\n   <p> Bairro: {{projeto.bairro}}</p> <br/>\n   <p> Cep: {{projeto.cep}}</p> <br/>\n   <p>   <ion-item *ngIf="projeto.foto">\n      <img [src]="projeto.foto">\n    </ion-item></p> <br/>\n\n\n\n   <ion-row>\n    <button ion-button block (click)="addOrEdit(cliente)">Editar</button>\n\n   </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\projetos\detalhe-projeto\detalhe-projeto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DetalheProjetoPage);
    return DetalheProjetoPage;
}());

//# sourceMappingURL=detalhe-projeto.js.map

/***/ })

});
//# sourceMappingURL=1.js.map