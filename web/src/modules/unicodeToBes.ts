export function 
unicodeToBes(unicode: string): Uint8Array {
    const output = [0x25, 0x42, 0x45, 0x54, 0x34, 0x30, 0x30, 0x25, 0x32, 0x30, 0x32, 0x32, 0x2F, 0x31, 0x31, 0x2F, 0x30, 0x38, 0x20, 0x20, 0x45, 0x35, 0x33, 0x33, 0x32, 0x32, 0x20, 0x20, 0x20, 0x20, 0x20, 0x32, 0x31]
    for (var i = 0; i < (512 - 33); i++) {
        output.push(0x20);
    }
    const semiheader = [0xff, 0xff, 0xff, 0x54];
    for (var i = 0; i < 5; i++) {
        output.push(semiheader[i]);
    }
    for (var i = 0; i < (512 - 4); i++) {
        output.push(0x20);
    }
    const header = [0xff, 0x2b, 0x00, 0xfd, 0xfe];
    for (var i = 0; i < 5; i++) {
        output.push(header[i]);
    }
    for (const char of unicode) {
      const codePoint = char.codePointAt(0);
      if (codePoint != null) {
        if (codePoint >= 0x2800 && codePoint <= 0x28ff) {
          output.push(codePoint - 0x2800 + 0xa0);
        }
      }
    }
    for (var i = 0; i < 21; i++) {
        output.push(0xfe);
    }
    output.push(0xff);
    return new Uint8Array(output);
  }