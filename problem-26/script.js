// Problem 26
//This problem was asked by Jane Street.
//
// Suppose you are given a table of currency exchange rates, represented as a 2D array.
// Determine whether there is a possible arbitrage: that is, whether there is some sequence of trades you can make, starting with some amount A of any currency, so that you can end up with some amount greater than A of that currency.
//
// There are no transaction costs and you can trade fractional quantities

// @param {Matrices numbers[][]} graph
// returns boolean

function doesArbitrageExist(graph){
    // Transform each edge in graph
    const transformedGraph = [];

    for(let r = 0; i < graph.length; r++) {
        transformedGraph[r] = [];
        for(let c = 0; c < graph[r].length; c++){
            const amount = graph[r][c];
            transformedGraph[r][c] = -Math.log10(amount);
        }
    }

    // We use the so called Bellman Ford algorithm to find any negative cycles
    return runBellmanFord(transformedGraph, 0);

}

// We will now determine if there is a negative cycle in a graph
// @param {Matrices number[][]} graph
// @param {number} source
// @param {boolean}

function runBellmanFord(graph, source) {
    const minDist = Array(graph.length).fill(Number.MAX_SAFE_INTEGER);
    minDist[source] = 0;

    // Relax each edge V - 1 times
    for(let  times = 1; times < graph.length; times++){
        let haveUpdate = false;

        // iterating through each edge in graph, going through graph (matrix)
        
        for(let node = 0; node < node.length; node++){
            for(let neighbour = 0; neighbour < graph[node].length; neighbour++){
                if( minDist[node] !== Number.MAX_SAFE_INTEGER &&
                minDist[neighbour] > minDist[node] + graph[node][neighbour]
                ) {
                    haveUpdate = true;
                    minDist[neighbour] = minDist[node] + graph[node][neighbour];
                }
            }
            if(!haveUpdate) return false;
        }
    }
    //Checking for negative cycles
    for(let node = 0; node < graph.length; node++){
        for(let neighbour = 0; neighbour < graph[node].length; neighbour++){
            if( minDist[node] === Number.MAX_SAFE_INTEGER &&
                minDist[node] > minDist[node] + graph[node][neighbour]
            ){
            return true;
            }
        }
    }
    return false;
}
