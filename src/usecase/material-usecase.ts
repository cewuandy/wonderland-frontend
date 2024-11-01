import 'reflect-metadata';
import {MaterialAPI, MaterialUseCase} from "@/domain/materials";
import {SearchRequest} from "@/domain/search-request";

export class materialUseCase implements MaterialUseCase {
  constructor(private readonly materialAPI: MaterialAPI) {
    this.materialAPI = materialAPI
  }

  async GetMaterialList(searchReq: SearchRequest): Promise<string> {
    return await this.materialAPI.ListMaterial(searchReq)
  }
}
