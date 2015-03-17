function Graph(v) {
  this.vertices = v;
  this.vertexList= [];
  this.edges = 0;
  this.adj = [];
  this.edgeTo = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    }
  this.marked = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
    }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.bfs = bfs;
  this.pathTo = pathTo;
  this.hasPathTo = hasPathTo;
  this.topSortHelper = topSortHelper;
  this.topSort = topSort
}

function addEdge(v,w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (var i = 0; i < this.vertices; ++i) {
    write(i + " -> ");
    for (var j = 0; j < this.vertices; ++j) {
      if (this.adj[i][j] != undefined)
        write(this.adj[i][j] + ' ');
    }
    print();
  }
}

function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] !== undefined) {
    print("Visited vertex: " + v);
    }
  for (var i = 0; i < this.adj[v].length; i++) {
    var w = this.adj[v][i];
    if (!this.marked[w]) {
      this.dfs(w);
      }
    }
}

function bfs(s) {
	var queue =[];
	this.marked[s] = true;
	queue.push(s) //add to back of queue
		while (queue.lenght > 0) {
			var v = queue.shift(); //remove from front of queue
			if (v !== undefined) {
				print("Visited vertex: " + v);
			}
			for (var i=0; i<this.adj[v].lenght; i++) {
				var w = this.adj[v][i];
				if(!this.marked[w]) {
					this.edgeTo[w] =v;
					this.marked[w] = true;
					queue.push(w);
				}
			}
		}
}

function pathTo(source,v) {
	if(!this.hasPathTo(v)) {
		return undefined;
	}
	var path = [];
	for(var i=v; i !=source; i = this.edgeTo[i]) {
		path.push(i);
	}
	path.push(source);
	return path;
}

function hasPathTo(v) {
	return this.marked[v];
}

function showPath(paths) {
	while (paths.length >0) {
		if(paths.lenght >1) {
			putstr(paths.pop() + '-');
		}
		else{
			putstr(paths.pop());
		}
	}
}

function topSort() {
	var stack = [];
	var visited = [];
	for (var i = 0; i < this.vertices; i++) {
		visited[i] = false;
	}
	for (var i = 0; i < this.vertices; i++) {
		if (!visited[i]) {
			this.topSortHelper(i, visited, stack);
		}
	}
	for (var i = 0; i < stack.length; i++) {
		if (stack[i] !== undefined && stack[i] !== false) {
				print(this.vertexList[stack[i]]);
		}
	}
}

function topSortHelper(v, visited, stack) {
	visited[v] = true;
	for (var i = 0; i < this.adj[v]; i++) {
		var w = this.adj[v][i];
		if (!visited[w]) {
			this.topSortHelper(visited[w], visited, stack);
		}									}
	stack.push(v);
}


