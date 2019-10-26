const w : number = window.innerWidth
const h : number = window.innerHeight
const scGap : number = 0.02
const delay : number = 30
const strokeFactor : number = 90
const sizeFactor : number = 2.9
const foreColor : string = "#4CAF50"
const backColor : string = "#BDBDBD"

class Stage {

    canvas : HTMLCanvasElement = document.createElement('canvas')
    context : CanvasRenderingContext2D

    initCanvas() {
        this.canvas.width = w
        this.canvas.height = h
        this.context = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)
    }

    render() {
        this.context.fillStyle = foreColor
        this.context.fillRect(0, 0, w, h)
    }

    handleTap() {
        this.canvas.onmousedown = () => {

        }
    }

    static init() {
        const stage : Stage = new Stage()
        stage.initCanvas()
        stage.render()
        stage.handleTap()
    }
}
