# Sassy-exists

Sass entity check library.

## Documentation

Sassy-exists [documentation](http://iamskok.github.io/sassy-exists/)

## Usage

Sassy-exists provides alternative syntax for:

* `variable-exists($name)` 
* `global-variable-exists($name)` 
* `function-exists($name)` 
* `mixin-exists($name)` 
* `feature-exists($name)` 

With Sassy-exists it becomes:

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

Git:

```
git clone https://github.com/iamskok/sassy-exists ./
```

Bower:

```
bower install sassy-exists --save-dev
```

## Requirements

Sassy-exists relies on `feature-detection` which is avaliable in:

* Ruby Sass <= `v3.3`
* LibSass <= `v3.1`

