function Graph(v) {
  this.vertices = v;
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
  this.pathTo = pathTo;
  this.hasPathTo = hasPathTo;
  this.showPath = showPath;
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


