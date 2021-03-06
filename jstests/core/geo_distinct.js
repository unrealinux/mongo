// Test distinct with geo queries SERVER-2135

t = db.commits
t.drop()

t.save( { _id : ObjectId( "4ce63ec2f360622431000013" ), loc : [ 55.59664, 13.00156 ], author : "FredrikL" } )

assert.commandWorked( db.runCommand( { distinct : 'commits', key : 'loc' } ) );

t.ensureIndex( { loc : '2d' } )

printjson( t.getIndexes() )

assert.commandWorked( db.runCommand( { distinct : 'commits', key : 'loc' } ) );
