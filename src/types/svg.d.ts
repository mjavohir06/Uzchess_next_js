declare module "*.svg" {
    import type {SVGPromp}from "react"

    const ReactComponent:(props:SVGPromp<SVGSVGElement>)=>React.ReactElement
    export default ReactComponent
}