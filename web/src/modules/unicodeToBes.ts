import { PagesRounded } from "@mui/icons-material";

export function 
unicodeToBes(unicode: string): Uint8Array {
    const output = [0x25, 0x42, 0x45, 0x54, 0x34, 0x30, 0x30, 0x25, 0x32, 0x30, 0x32, 0x33, 0x2F, 0x30, 0x35, 0x2F, 0x31, 0x36, 0x20, 0x20, 0x45, 0x35, 0x33, 0x33, 0x32, 0x32, 0x20, 0x20, 0x20, 0x20, 0x20, 0x30]
    for (var i = 0; i < (512 - 32); i++) {
        output.push(0x20);
    }
    const semiheader = [0xff, 0xff, 0xff, 0x54];
    for (var i = 0; i < 5; i++) {
        output.push(semiheader[i]);
    }
    for (var i = 0; i < (511 - 4); i++) {
        output.push(0x20);
    }
    const header = [0xff, 0xc1, 0x00, 0xfd];
    for (var i = 0; i < 4; i++) {
        output.push(header[i]);
    }
    for (var i = 0; i < 27; i++) {
        output.push(0xa0);
    }
    output.push(0xfe);
    var letters = 0;
    var lines = 0;
    var pages = 0;
    for (const char of unicode) {
      const codePoint = char.codePointAt(0);
      console.log(char + " letters: " + letters);
      if (codePoint != null) {
        if (codePoint >= 0x2800 && codePoint <= 0x28ff) {
          output.push(codePoint - 0x2800 + 0xa0);
          letters += 1;
        }
      }
      if (letters == 32 || char == "n") {
        output.push(0x0d);
        output.push(0xfe);
        lines += 1;
        letters = 0;
        console.log("fe");
      }
      if (lines == 21) {
        for (var i = 0; i < 27; i++) {
          output.push(0xa0);
        }
        output.push(0xfe);
        lines = 0;
        pages += 1;
      }
    }
    output[31] = 0x30 + pages;
    for (var i = 0; i + lines < 21; i++) {
      output.push(0xfe);
    }
    output.push(0xff);
    return new Uint8Array(output);
  }