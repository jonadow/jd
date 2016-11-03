
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.gallery = function (req, res) {
    res.render('gallery', { title: 'gallery', year: new Date().getFullYear(), message: 'gallery' });
};

exports.spin = function (req, res) {
    res.render('spin', { title: 'spin', year: new Date().getFullYear(), message: 'spin' });
};

exports.rand = function (req, res) {
    res.render('rand', { title: 'rand', year: new Date().getFullYear(), message: 'rand' });
};

exports.thinplate = function (req, res) {
    res.render('thinplate', { title: 'thinplate', year: new Date().getFullYear(), message: 'thinplate' });
};

exports.wave2D = function (req, res) {
    res.render('wave2D', { title: 'wave2D', year: new Date().getFullYear(), message: 'wave2D' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};
