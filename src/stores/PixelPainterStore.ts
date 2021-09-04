import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][],
  currentcolor: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  currentcolor: "#FFFFFF" 
})

export const setSelectColor = (color: string) => {
  PixelPainterStore.update(
    x => { x.currentcolor = color }
  )
}

export const setCanvas = (i: number, j: number) => {
  PixelPainterStore.update(
    x => { x.canvas[i][j] = x.currentcolor }
  )
}

export const clearCanvas = () => {
  PixelPainterStore.update(
    x => { x.canvas = createEmptyCanvas() }
  )
}

export const randomCanvas = () => {
  const arrColor : string[] = ['#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E']
  PixelPainterStore.update(e => {
    for(let i=0; i<16; i++){
      e.canvas[i] = []
      for(let j=0; j<16; j++){
        e.canvas[i].push(arrColor[Math.floor(Math.random()*12)])
      }
    }
  })
}