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
g.dfs();
g.bfs();

