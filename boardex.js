load('Graph.js');

g = new Graph(9);
g.addEdge(0,1);
g.addEdge(1,4);
g.addEdge(4,2);
g.addEdge(4,5);
g.addEdge(2,5);
g.addEdge(5,8);
g.addEdge(8,7);
g.addEdge(7,3);
g.addEdge(7,6);
g.showGraph();
