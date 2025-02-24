// Type definitions for ngraph.graph v18.0.0
// Project: https://github.com/anvaka/ngraph.graph
// Definitions by: Nathan Westlake <https://github.com/CorayThan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "ngraph.graph" {

    type NodeId = string | number

    interface Link<Data = any> {
        id: string,
        fromId: NodeId,
        toId: NodeId,
        data: Data
    }

    interface Node<Data = any> {
        id: NodeId,
        links: Link[],
        data: Data
    }

    interface Graph<NodeData = any, LinkData = any> {
        addNode: (node: NodeId, data?: NodeData) => Node<NodeData>
        addLink: (from: NodeId, to: NodeId, data?: LinkData) => Link<LinkData>
        removeLink: (link: Link<LinkData>) => boolean
        removeNode: (nodeId: NodeId) => boolean
        getNode: (nodeId: NodeId) => Node<NodeData> | undefined
        hasNode: (nodeId: NodeId) => Node<NodeData> | undefined
        getLink: (fromNodeId: NodeId, toNodeId: NodeId) => Link<LinkData> | null
        hasLink: (fromNodeId: NodeId, toNodeId: NodeId) => Link<LinkData> | null
        getNodesCount: () => number
        getLinksCount: () => number
        getLinks: Link<LinkData>[]
        forEachNode: (callbackPerNode: (node: Node<NodeData>) => boolean) => void
        forEachLinkedNode: (nodeId: NodeId, callbackPerNode: (node: Node<NodeData>, link: Link<LinkData>) => void, oriented: boolean) => void
        forEachLink: (callbackPerLink: (link: Link<LinkData>) => void) => void
        beginUpdate: () => void
        endUpdate: () => void
        clear: () => void
    }

    export default function createGraph<NodeData = any, LinkData = any>(options?: { multigraph: boolean }): Graph<NodeData, LinkData>

}
