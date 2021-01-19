import { appState } from "../AppState"
import { api } from './AxiosService'

let baseURL = '/apod?api_key=DEMO_KEY'

class PictureService {
  getDaily = async () => {
    let res = await api.get(baseURL)
    appState.picture = res.data
    console.log(res.data)
    console.log(appState.picture.url)
  }
  getDate = async (date) => {
    let res = await api.get(`${baseURL}&date=${date}`)
    appState.picture = res.data
  }
}

export const pictureService = new PictureService()
