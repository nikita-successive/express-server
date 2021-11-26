export class Trainee_Controller{
    //  constructor(){}
    trainne_get_routes = function(req,res){
        res.send('This is get respond call');
    }
    trainee_put_routes = function (req,res) {
        res.send('this is put routes');
    }
    trainee_post_routes = function (req,res) {
        res.send('this is post routes');
    }
    trainee_delete_routes = function (req,res) {
        res.send('this is delete routes');
    }
}
