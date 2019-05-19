var route = require('./app/routes/overall.server.routes');

var app = express();
app.set('views', path.join(__dirname, 'app/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookie());
app.use(session({secret:'ssshhhhh', cookie:{maxAge: 5*60*10000}, resave: true, saveUninitialized: true}));
app.use('/', route);
app.listen(3000, function () {
    console.log('assignment 2 app listening on port 3000');
});