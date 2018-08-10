//MacroApp
let app = {
    metaData  : {
        servingUnits     : {
            grams  : 0,
            flOz   : 1,
            ounces : 2,
            mL     : 3
        },
        Genders          : ['Male', 'Female'],
        measurementUnits : [
            {
                name   : 'imperial',
                weight : 'lbs',
                height : 'inches'
            }, {
                name   : 'metric',
                weight : 'kg',
                height : 'cm'
            }
        ]

    },
    UserData  : {
        Name             : '',
        Gender           : 0,
        Weight           : 165,
        Height           : 70,
        measurementUnits : 0,
        goals            : {
            weight   : 180,
            calories : 2000,
            macros   : {
                protein : 30,
                fat     : 30,
                carbs   : 40
            }
        }
    },
    Utilities : {
        getFoodItems      : function () {
        },
        calculateNetCarbs : function (food) {
            return food.info.nutrition.carbs.total - food.info.nutrition.carbs.fiber;
        },
        addNewFood        : function (params) {
            app.Food.push({
                              name : params.name,
                              id   : new Date().getTime(),
                              info : {
                                  calories    : params.calories || 0,
                                  serving     : 0,
                                  servingUnit : params.servingUnit || 'grams',
                                  nutrition   : {
                                      fat     : {
                                          total     : 0,
                                          mono      : 0,
                                          poly      : 0,
                                          saturated : 0,
                                          trans     : 0
                                      },
                                      carbs   : {
                                          total : 0,
                                          fiber : 0,
                                          sugar : 0
                                      },
                                      protein : 0,
                                      other   : {
                                          cholesterol : 0,
                                          sodium      : 0
                                      }
                                  }
                              }
                          });
        },
        editFood          : function () {
        }
    },
    Food      : [
        {
            name  : 'Peanut Butter Cups',
            brand : 'Justin\'s',
            id    : 1234567890852,
            info  : {
                calories    : 210,
                serving     : 40,
                servingUnit : 'grams',
                nutrition   : {
                    fat     : {
                        total     : 14,
                        mono      : 0,
                        poly      : 0,
                        saturated : 7,
                        trans     : 0
                    },
                    carbs   : {
                        total : 21,
                        fiber : 1,
                        sugar : 17
                    },
                    protein : 4,
                    other   : {
                        cholesterol : 0,
                        sodium      : 120
                    }
                }
            }
        }
    ]
};