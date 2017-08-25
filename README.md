# outlook-google-sync
![build](https://travis-ci.org/sjmyuan/outlook-google-sync.svg)
[![Coverage Status](https://coveralls.io/repos/github/sjmyuan/outlook-google-sync/badge.svg?branch=master)](https://coveralls.io/github/sjmyuan/outlook-google-sync?branch=master)

## Infrastructure
![Infrastructure](./images/outlook-google-sync.png?raw=true)

## Purpose
This repo is used to synchronize events from Outlook to Gmail. it use OAuth2.0 to access the email api.

## Features
+ Support OAuth2.0
+ Support filtering duplicated events
+ Support booking rooms for Gmail
+ Support ignoring events by subject
+ Support ordering rooms 
+ Support email group
+ Support send email when failed to book room
+ Support re-booking room for event whoes time was modified

## How to use
1. Register user using /add/user
2. Edit user configuration using /user/config
    * Add involved attendees
    * Authenticate Outlook
    * Authenticate Gmail
    * Add rooms
    * Add ignored subject

## To do list
+ Add configuration ui
+ Send authentication email
+ Support booking room for no location events
+ Only synchronize events with valid room
