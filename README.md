# Sassy-exists

Sassy-exists is Sass micro library for existance checks. 

It is a handy addition for every Sass project which can't afford to have doubts.

## Documentation

Sassy-exists [Official Documentation](http://sassysuit.github.io/sassy-exists/)

## Usage

Sassy-exists provides alternative syntax for:

* `variable-exists($name)` 
* `global-variable-exists($name)` 
* `function-exists($name)` 
* `mixin-exists($name)` 
* `feature-exists($name)` 

With _Sassy-exists_ it becomes:

```
exists($name, $type)
```

Where `$type` values are: 

* `variable`
* `global-variable`
* `mixin`
* `function`
* `feature`

## Installation

_Git_:

```
git clone git@github.com:SassySuit/sassy-exists.git ./
```

_Bower_:

```
bower install sassy-exists --save-dev
```

## Requirements

Sassy-exists relies on `feature-detection` Sass functions which are avaliable with:

* Ruby Sass `v3.3` and higher 
* LibSass `v3.1` and higher

