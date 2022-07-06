// Problem 11
//
// This problem was asked by Twitter.
//
// Implement an autocomplete system.
// That is, given a query string s and a set of all possible query strings,
// return all strings in the set that have s as a prefix.
//
// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
//
// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
//

class TrieNode {

    constructor(char){
        this.char = char;
        this.isCompleted = false;
        this.children = new Map();
    }

}

class Trie {
// Initialization of a Trie
    constructor() {
    this.root = new TrieNode('*');
    }

    // Inserting a word into Trie
    insert(word){
    let currNode = this.root;
        for(let i = 0; i < word.length; i++){
        const {children} = currNode;
        const char = word.charAt(i);

        if(!children.has(char)){
        children.set(char, new TrieNode(char));
        }
        currNode = children.get(char);
        }
        // this node is a leaf node and is a word
        currNode.isCompleted = true;
    }
}

/* Returning the words that have this prefix */

function getWordsWithPrefix(prefix, words){
    const trie = new Trie();
    // insert all words into a trie
    for(let i = 0; i < words.length; i++){
    trie.insert(words[i]);
    }
    const list = [];
    let currTrieNode = trie.root;

    // get to the current level of prefix
    for(let i = 0; i < prefix.length; i++){
        const char = prefix.charAt(i);
        if(!currTrieNode.children.has(char)){
        return list; // No words at this level
        }
        currTrieNode = currTrieNode.children.get(char);
        // search for all the completed words
        getWords(currTrieNode, prefix, list);
        return list;

    }
}
function getWords(trieNode, prefix, list){
    if(trieNode.isCompleted){
    list.push(prefix);
    }
    const characters = Array.from(children.keys());
    for(let i = 0; i < characters.length; i++){
    const char = characters[i];
    getWords(children.get(char), prefix + char, list); // recursive call on its children
    }
}
