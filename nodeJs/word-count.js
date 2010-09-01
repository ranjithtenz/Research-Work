
var sys = require('sys'),
    fs = require('fs');


function USAGE(message) {
  var error_code = 0;
  sys.puts("\n  USAGE: pagecount FILENAME\n\n" +
    "  Show the estimated page count of a file based on 350 words per page.\n" +
    "  FILENAME should be the name of a utf-8 encoded text file.\n" +
    "\b\n" + 
    "  Example:\n\t\tpagecount MyFile.txt\n\n  Estimates the page count of MyFile.txt\n");

  if (message !== undefined) {
    sys.puts(message);
    error_code = 1;
  }
  process.exit(error_code);
};


function PageCount(filename) {
  fs.stat(filename, function (stat_error, stat) {
    if (stat_error) {
      USAGE("ERROR: " + filename + ", " + stat_error);
    }

    if (stat.isFile()) {
      fs.readFile(filename, 'utf8', function (read_error, content) {
        var subtotal_words = 0;
        if (read_error) {
          USAGE("ERROR: Can't read " + filename + ". " + read_error);
        }

        subtotal_words = content.replace(/\W+|\s+/gm,' ').split(' ').length;
        page_count = (subtotal_words/350);
        if (Number(page_count).toFixed(0) <= 1) {
          sys.puts(filename + "(" + subtotal_words + " words): " +
            Number(page_count * 100).toFixed(0) + "% of one page.");
        } else {
          sys.puts(filename + "(" + subtotal_words + " words):" +
            Number(page_count).toFixed(2) + " pages.");
        }
      });
    } else {
      USAGE("ERROR: " + filename + " is not a file.");
    }
  });
};

if (process.argv.length < 3) {
  USAGE();
}

for (var i = 2; i < process.argv.length; i += 1) {
  PageCount(process.argv[i]);
}
