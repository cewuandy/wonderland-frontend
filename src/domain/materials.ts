import {SearchRequest} from "@/domain/search-request";

export interface MaterialUseCase {
  GetMaterialList: (searchReq: SearchRequest) => Promise<string>
}

export interface MaterialAPI {
  ListMaterial: (searchReq: SearchRequest) => Promise<string>
}
