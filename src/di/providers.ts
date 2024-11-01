import {MaterialAPI, MaterialUseCase} from "@/domain/materials";
import {materialAPI} from "@/repo/api/materials";
import {materialUseCase} from "@/usecase/material-usecase";


const baseUrl = `http://wonderland-backend.cewuandy.org/wonderland/v1`;

const mAPI: MaterialAPI = new materialAPI(baseUrl);
export const mUseCase: MaterialUseCase = new materialUseCase(mAPI);
