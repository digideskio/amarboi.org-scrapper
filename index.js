var Xray = require('x-ray');
var x = Xray();

x(
  'http://www.amarboi.org/book/page/category/writer/alphabet/publishers/tagWord',
  'li.clearfix', [{
    pdf: x('.heading a@href', '.simpleTabsContent a@href')
}])
.paginate('.pagination-tt.clearfix.mt li:last-child a@href')
.write('results.json')
