var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var model = {

    connectToDb: function (callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            callback(dbo)
        });
    },
    findUser: function (email, callback) {
        model.connectToDb(function (dbo) {

            dbo.collection("users").findOne({email: email}, function (err, usersInfo) {
                if (err) {
                    console.log(err);
                }
                callback(usersInfo)
            })
        }) 
    },
    findPet: function (chipID, callback) {
        model.connectToDb(function (dbo) {

            dbo.collection("pets").findOne({chipID: chipID}, function (err, petInfo) {
                if (err) {
                    console.log(err);
                }
                callback(petInfo)
            })
        })
    },
    findAllUsers: function (callback) {
        model.connectToDb(function (dbo) {

            dbo.collection("users").find().toArray( function (err,db) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Data obtained");
                    callback(db)
                }
            })
        })
    },
    findAllPets: function (callback) {
        model.connectToDb(function (dbo) {

            dbo.collection("pets").find().toArray( function (err,db) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Data obtained");
                    callback(db)
                }
            })
        })
    },
    findAllReservations: function (callback) {
        model.connectToDb(function (dbo) {

            dbo.collection("reservations").find().toArray( function (err,db) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Data obtained");
                    callback(db)
                }
            })
        })
    },
    findAllReservationsWithoutUsers: function (callback) {
        model.connectToDb(function (dbo) {

            dbo.collection("reservationswithoutlogin").find().toArray( function (err,db) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Data obtained");
                    callback(db)
                }
            })
        })
    },
    findAllContact: function (callback) {
        model.connectToDb(function (dbo) {

            dbo.collection("contactform").find().toArray( function (err,db) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Data obtained");
                    callback(db)
                }
            })
        })
    },
    findBalance: function (email, callback) {
        model.connectToDb(function (dbo) {
            dbo.collection("usersBalance").findOne({email: email}, function (err, userBalance) {
                if (err) {
                    console.log(err);
                }
                //console.log(resu);
                callback(userBalance)
            })
        })
    },
    findUserReservations: function (email, callback) {
        model.connectToDb(function (dbo) {
            dbo.collection("reservations").find({email: email}).toArray( function (err, userReservations) {
                if (err) {
                    console.log(err);
                }
                //console.log(resu);
                callback(userReservations)
            })
        })
    },
    findCurrencies: function (callback) {
        model.connectToDb(function (dbo) {
            dbo.collection("Cryptocurrencies").find({},{_id: 0, name: 1}).toArray(function(err,currenciesPair) {
                if (err) {
                    console.log(err);
                }
                //console.log(resu);
                callback(currenciesPair)
            })
        })
    },
    findCurrencies2: function (coin,callback) {
        model.connectToDb(function (dbo) {
            dbo.collection("Cryptocurrencies").findOne({name: coin},function(err,currenciesPair) {
                if (err) {
                    console.log(err);
                }
                //console.log(resu);
                callback(currenciesPair)
            })
        })
    },
    getALL: function (callback) {
        model.connectToDb(function (dbo) {
            dbo.collection("usersBalance").find({}).toArray(function (err, resu) {
                if (resu != null) {
                    callback(resu);
                } else {
                    callback({error: 1});
                }
                //console.log(resul);
            });
        });
    },
    getAllMarket: function (callback) {
        model.connectToDb(function (dbo) {

                dbo.collection("market").find({}).toArray(function (err, marketOffers) {
                    if (marketOffers !== null) {

                        callback(marketOffers);
                    } else {
                        callback({error: 1});
                    }

            });

        });
    },
    // filterMarket: function (callback) {
    //     model.connectToDb(function (dbo) {
    //             model.findUser(email, function (usersInfo) {
    //         model.getAllMarket(function(callback){
    //             for (var i in marketOffers) {
    //                 var re = marketOffers[i];
    //                 var arr = [re.coin, re.coins];
    //                 var s = [myobj.coins, myobj.coin];
    //
    //
    //             }
    //             if (err) throw err;
    //             callback(match);
    //             //console.log(resul);
    //
    //         });
    //         });
    //     });
    // },
    sortMarket: function (callback) {
        model.connectToDb(function (dbo) {
            dbo.collection("market").find().sort({"priceSell" : 1}).toArray(function(err, sorted) {
                if (err) throw err;
                callback(sorted);
                //console.log(resul);
            });
        });
    }
};

module.exports = model;