"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var data_service_1 = require("../services/data-service");
var items_service_1 = require("../services/items-service");
var router_1 = require("@angular/router");
var DashboardComponent = (function () {
    function DashboardComponent(router, route, http, dataService, itemsService) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.dataService = dataService;
        this.itemsService = itemsService;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "age";
        this.sortOrder = "asc";
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.params['id'] != undefined) {
            this.id = +this.route.snapshot.params['id'];
            alert('id = ' + this.id);
        }
        this.dataService.getData()
            .subscribe(function (data) {
            _this.data = data;
        }, function (error) {
            alert('erro - ' + error);
        });
    };
    DashboardComponent.prototype.remove = function (item, indx) {
        this.itemsService.removeItemFromArray(this.data, item);
        //this.data.splice(indx, 1);
    };
    DashboardComponent.prototype.toInt = function (num) {
        return +num;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dashboard',
        //template: `<h1>Hello {{name}}:{{amount}}</h1>`,
        templateUrl: 'dashboard.html',
        styleUrls: ['styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, http_1.Http, data_service_1.DataService, items_service_1.ItemsService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.js.map