SELECT `UserName`,
       (SELECT `UserName` FROM `USER` WHERE ID = us.`Parent`)
FROM `USER` us
