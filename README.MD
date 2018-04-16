 Installl dependancies
```javascript
 npm install
 
 //mongodb queries to prep for adding of users

 use protegrityUserManagementDB
db.getCollection('roles').insertMany([{
    _id:"Security Administrator Viewer",
    description:"Security Administrator Viewer Role",
    roles:["Cloud Gateway Viewer","Appliance CLI Viewer","Appliance Web Viewer"]
    },{
        _id:"Shell Accounts",
        description:"Accounts that have shell access",
        roles:["Shell non cli access"]},{
            _id:"Security Administrator",
            description:"Security Administrator Role",
            roles:["Security Officer","Appliance Web Manager","Appliance CLI Administrator","Export Certificates","Cloud Gateway Admin","Cloud Gateway Auth","DPS Admin","Directory Manager","Export Keys","RLP Manager"]
            },{
                _id:"Directory Administrator",
                description:"Local LDAP Administrator Role",
                roles:["Directory Manager"]
                }])
 ```

 