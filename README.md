# discord_bots
personal bots

## jefferey: a reminder bot for me
* pings weekly to remind for daily cactpot

## otterman: a general use bot
* reminder function
  * ping a role at a specified time
  * types of reminders
    * non repeating reminder
    * repeating reminder
      * indefinite reminder
      * finite reminder
        * stops after *x* reminders
        * stops after *y* calendar day
  * input: $remind [crontab format] | [reminder text] | [*type*] | [*arguments*]
  * example: $remind `*:*:14:30:Sat` | sample text | indefinite
    * month cal_day hour min week_day
    * remind me every month, regardless of the calendar day, at 14:30 every Saturday