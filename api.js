document.addEventListener("DOMContentLoaded", function(event) {
    const pBody = document.body;

    var GJAPI={};


    if(GJAPI.bLoggedIn || localStorage.getItem('gameKey') && localStorage.getItem('gameID')) {
        // Проверяем, есть ли данные в localStorage
        const UserName = localStorage.getItem('UserName');
        const UserToken = localStorage.getItem('UserToken');

        if (UserName && UserToken) {
            // Заполняем переменные, если они есть в localStorage
            GJAPI.sUserName = UserName;
            GJAPI.sUserToken = UserToken;

            // ****************************************************************
            // LOGIN

            const sSaveUserName  = GJAPI.sUserName;
            const sSaveUserToken = GJAPI.sUserToken;
            console.log(sSaveUserName, sSaveUserToken);
        
            try {
                GJAPI.UserLogout();
                GJAPI.UserLoginManual(sSaveUserName, sSaveUserToken,
                function(pResponse)
                {
                    pBody.innerHTML += "[LOGIN] " + ("User " + sSaveUserName + " logged in") + "<br>";

                    // ****************************************************************
                    // TROPHY
                    const nTrophyFetchCallback = function(pResponse) {
                        pBody.innerHTML += "[TROPHY] " + ("Trophy " + pResponse.trophies[0].title + " (ID " + pResponse.trophies[0].id + ") fetched") + "<br>";
                        pBody.innerHTML += "[TROPHY] " + ("<img src='" + pResponse.trophies[0].image_url + "'>") + "<br>";
                    };

                    GJAPI.TrophyAchieve(6506,
                    function(pResponse)
                    {
                        pBody.innerHTML += "[TROPHY] " + ("Achieved: " + pResponse.message) + "<br>";

                        GJAPI.TrophyRemove(6506,
                        function(pResponse)
                        {
                            pBody.innerHTML += "[TROPHY] " + ("Removed: " + pResponse.message) + "<br>";
                        });
                    });
                    GJAPI.TrophyFetch      (GJAPI.TROPHY_ALL, nTrophyFetchCallback);
                    GJAPI.TrophyFetchSingle(6506,             nTrophyFetchCallback);

                    // ****************************************************************
                    // SCORE
                    const iNewScore = Math.floor(Math.random() * 10000);

                    GJAPI.ScoreAdd(0, iNewScore, iNewScore + " Potatoes", null,
                    function(pResponse)
                    {
                        pBody.innerHTML += "[SCORE] " + ("User Score sent") + "<br>";

                        GJAPI.ScoreAddGuest(0, iNewScore, iNewScore + " Potatoes", "Horsti", null,
                        function(pResponse)
                        {
                            pBody.innerHTML += "[SCORE] " + ("Guest Score sent") + "<br>";

                            const nScoreFetchCallback =
                            function(pResponse, sString)
                            {
                                for(let i = 0; i < pResponse.scores.length; ++i)
                                {
                                    const pScore = pResponse.scores[i];
                                    pBody.innerHTML += "[SCORE] " + (sString + (i + 1) + ". " + (pScore.user ? pScore.user : pScore.guest) + " - " + pScore.score) + "<br>";
                                }
                            };

                            GJAPI.ScoreFetch(0, GJAPI.SCORE_ALL, 10,
                            function(pResponse)
                            {
                                nScoreFetchCallback(pResponse, "Fetched: ")
                            });

                            GJAPI.ScoreFetchGuest(0, "Horsti", 10,
                            function(pResponse)
                            {
                                nScoreFetchCallback(pResponse, "Fetched (guest): ")
                            });

                            GJAPI.ScoreFetchEx(0, GJAPI.SCORE_ALL, 10, GJAPI.BETTER_THAN, 5000,
                            function(pResponse)
                            {
                                nScoreFetchCallback(pResponse, "Fetched (better than 5000): ")
                            });

                            GJAPI.ScoreFetchEx(0, GJAPI.SCORE_ALL, 10, GJAPI.WORSE_THAN, 5000,
                            function(pResponse)
                            {
                                nScoreFetchCallback(pResponse, "Fetched (worst than 5000): ")
                            });

                            GJAPI.ScoreFetchGuestEx(0, "Horsti", 10, GJAPI.BETTER_THAN, 5000,
                            function(pResponse)
                            {
                                nScoreFetchCallback(pResponse, "Fetched (better than 5000, guest): ")
                            });
                        });

                        GJAPI.ScoreGetRank(0, iNewScore,
                        function(pResponse)
                        {
                            pBody.innerHTML += "[SCORE] " + ("Rank for score " + iNewScore + ": " + pResponse.rank) + "<br>";
                        });

                        GJAPI.ScoreGetTables(
                        function(pResponse)
                        {
                            for(let i = 0; i < pResponse.tables.length; ++i)
                            {
                                const pTable = pResponse.tables[i];
                                pBody.innerHTML += "[SCORE] " + ("Table " + (i + 1) + ": " + pTable.name + " (ID " + pTable.id + ")") + "<br>";
                            }
                        });
                    });

                    // ****************************************************************
                    // FRIENDS
                    GJAPI.FriendsFetch(function(pResponse)
                    {
                        for(let i = 0; (i < pResponse.friends.length) && (i < 5); ++i)
                        {
                            GJAPI.UserFetchID(pResponse.friends[i].friend_id,
                            function(pResponse)
                            {
                                pBody.innerHTML += "[FRIENDS] " + "Friend " + (i + 1) + ": " + pResponse.users[0].username + "<br>";
                            });
                        }
                    });
                });
            } catch(n) {
                null;
            }

            try { 
                // ****************************************************************
                // USER
                const nUserFetchCallback =
                function(pResponse)
                {
                    pBody.innerHTML += "[USER] " + ("User " + pResponse.users[0].username + " (ID " + pResponse.users[0].id + ") fetched") + "<br>";
                    pBody.innerHTML += "[USER] " + ("<img src='" + pResponse.users[0].avatar_url + "'>") + "<br>";
                };

                GJAPI.UserFetchID  (1,     nUserFetchCallback);
                GJAPI.UserFetchName("Nik", nUserFetchCallback);
                

                // ****************************************************************
                // DATA STORE
                
                GJAPI.DataStoreSet(GJAPI.DATA_STORE_GLOBAL, "MyData", "1234",
                function(pResponse)
                {
                    pBody.innerHTML += "[DATA STORE] " + ("Data set") + "<br>";

                    GJAPI.DataStoreFetch(GJAPI.DATA_STORE_GLOBAL, "MyData",
                    function(pResponse)
                    {
                        pBody.innerHTML += "[DATA STORE] " + ("Data fetched: " + pResponse.success + " " + pResponse.data) + "<br>";

                        GJAPI.DataStoreUpdate(GJAPI.DATA_STORE_GLOBAL, "MyData", "add", "2",
                        function(pResponse)
                        {
                            pBody.innerHTML += "[DATA STORE] " + ("Data updated +2") + "<br>";

                            GJAPI.DataStoreFetch(GJAPI.DATA_STORE_GLOBAL, "MyData",
                            function(pResponse)
                            {
                                pBody.innerHTML += "[DATA STORE] " + ("Data fetched again: " + pResponse.success + " " + pResponse.data) + "<br>";

                                GJAPI.DataStoreGetKeys(GJAPI.DATA_STORE_GLOBAL, 
                                function(pResponse)
                                {
                                    pBody.innerHTML += "[DATA STORE] " + ("Data Store Keys fetched: " + pResponse.keys.length) + "<br>";

                                    GJAPI.DataStoreRemove(GJAPI.DATA_STORE_GLOBAL, "MyData",
                                    function(pResponse)
                                    {
                                        pBody.innerHTML += "[DATA STORE] " + ("Data removed") + "<br>";

                                        GJAPI.DataStoreGetKeys(GJAPI.DATA_STORE_GLOBAL, 
                                        function(pResponse)
                                        {
                                            pBody.innerHTML += "[DATA STORE] " + ("Data Store Keys fetched: " + pResponse.keys.length) + "<br>";
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            } catch(n) {
                null;
            }

            try { 
                // ****************************************************************
                // TIME
                GJAPI.TimeFetch(function(pResponse)
                {
                    pBody.innerHTML += "[TIME] " + pResponse.year + "-" + pResponse.month + "-" + pResponse.day + " " + pResponse.hour + ":" + pResponse.minute + "." + pResponse.second + " " + pResponse.timezone + "<br>";
                });
            } catch(n) {
                null;
            }

        }


    }
});