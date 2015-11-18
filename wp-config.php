<?php


// ** MySQL settings ** //
/** The name of the database for WordPress */
define('DB_NAME', 'cumberlandspine');

/** MySQL database username */
define('DB_USER', 'wp');

/** MySQL database password */
define('DB_PASSWORD', 'wp');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('AUTH_KEY',         'I+hHg[I]^M-?vs_R:E_jE2YzW<FKmpedA}.JZ<ib^fMjYP$&0A;-O~42}GUP#bqn');
define('SECURE_AUTH_KEY',  'KI7w+e?(|>[O@^M32k>dIc#7$o+_^?SfnHnf4QJ?|Dgwqh{`7}2W#?OzD}ju8t;p');
define('LOGGED_IN_KEY',    '#`u68hd@U_|LN}7YgS*(>}<T1,-U|KeSx+yu1}$[YNk+}D,{73[MK=(3i_(8s6HI');
define('NONCE_KEY',        '$s[4e/6n;.L it#K-6*3)Qgp9uDX|p1UW.)KIM=75]B/[[Z#%,|f,.7uGsHZ=(fq');
define('AUTH_SALT',        '|S[H]G^ihCm{cr*^.UDThj(nI&-~dW^1 k9c$Z0c<UJ/4+:%a`%X&A+!$*sqet0[');
define('SECURE_AUTH_SALT', 'N37RI!GP1AS$r#:S5&v- 2m%%PXp{;z5WHtBjo#3Hf7Dm@=RuLm8|_u*KI.$OD3S');
define('LOGGED_IN_SALT',   'lK;L@C.N-<v]-z7:kI.RRGGV;#/+g[L6^dFYc|},I7b<QA sqzT=|M+7yD@.nQX5');
define('NONCE_SALT',       'g/;z`_J@umh))gSjO{aTwI|p+c1.uXsPx[Sw-azw=e+C]N(}AklV8.-xX_$C3^NF');


$table_prefix = 'wp_';





/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
