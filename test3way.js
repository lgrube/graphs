load("Graph.js");
g = new Graph(10);
g.addEdge(0,3);
g.addEdge(1,4)
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(3,6);
g.addEdge(3,4);
g.addEdge(4,7);
g.addEdge(5,8);
g.addEdge(6,7);
g.addEdge(7,9);
g.addEdge(8,9);
g.showGraph();
//g.dfs(0);
g.bfs(0); // trying to run this right here just wont print
var vertex = 4;
var source = 0;
var paths = g.pathTo(source, vertex);
g.showPath(paths);
