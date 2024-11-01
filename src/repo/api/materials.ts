import 'reflect-metadata';
import {MaterialAPI} from "@/domain/materials";
import {SearchRequest} from "@/domain/search-request";
import axios from 'axios'

export class materialAPI implements MaterialAPI {
  constructor(private readonly baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async ListMaterial(searchReq: SearchRequest): Promise<string> {
    const name: string = searchReq.name
    const quantity: number = searchReq.number
    const clockEnable: boolean = searchReq.clock
    const standClockEnable: boolean = searchReq.standClock
    const windmillEnable: boolean = searchReq.windmill
    const acEnable: boolean = searchReq.ac
    const url: string = this.baseUrl + `/material?name=${name}&quantity=${quantity}&clockEnable=${clockEnable}&standClockEnable=${standClockEnable}&windmillEnable=${windmillEnable}&acEnable=${acEnable}`
    let returnValue: string = ""

    await axios.get(url)
    .then(function (response) {
      returnValue = response.data;
    })
    .catch(function (error) {
      returnValue = 'Error: ' + error;
    });

    return returnValue
  }
}
