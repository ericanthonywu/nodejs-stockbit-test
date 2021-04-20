SELECT `UserName`,
       (SELECT `UserName` FROM `USER` WHERE ID = us.`Parent`) as ParentUserName
FROM `USER` us
