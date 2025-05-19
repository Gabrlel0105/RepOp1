import {Injectable} from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Bundle} from "../models/bundle/bundles.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BundlesService extends BaseService<Bundle> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/bundles';
  }

  getAllProductsFromBundle(id: number) {
    return this.getFromCustomEndpoint(`bundles/${id}/products`);
  }
}
