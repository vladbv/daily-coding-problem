// Problem 44
// This problem was asked Microsoft.
//
// Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.
//
// For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.
//
// O(1) Time complexity
// O(1) Space complexity

class FileReader {
    // Initializing a file reader
    
    constructor(file) {
    this.file = file;
    this.offset = 0;
    this.buffer = '';
    }

    // Reading 7 characters from the file
    // @return {string}

    read7() {
        const start = this.offset;
        const end = Math.min(this.offset + 7, this.file.length);
        // updating the offset
        this.offset = end;
        return this.file.substring(start, end);
    }

    // Reading N characters using read7
    // @param {int} n
    // @return {string}

    readN(n) {
        // adding extra characters to the buffer until the buffer's length is greater than or equal to n
        while(this.buffer.length < n) {
            const extra = this.read7();
            if (extra.length === 0) break;
            this.buffer += extra;
        }

        // updates buffer
        const readResult = this.buffer.substring(0, n);
        this.buffer = this.buffer.substring(n);
        return readResult;
    }
}
