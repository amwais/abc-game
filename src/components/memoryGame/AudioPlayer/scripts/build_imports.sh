#!/bin/bash

build_imports() {
  rm output
  CHARS=("a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k" "l" "m" "n" "o" "p" "q" "r" "s" "t" "u" "v" "w" "x" "y" "z")
  for CHAR in "${CHARS[@]}"
  do
    # printf "${CHAR}, "
    cat >> output <<EOF
export const ${CHAR} = require('./${CHAR}.wav');
EOF
  done
  cat output
}


build_imports