#!/bin/sh
DEST=/home/ramnivas/Desktop/db_backups/11-29-17-Nov/storeData
mongorestore -d validDb $DEST
echo 'backup upload sucessfully'