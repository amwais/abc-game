#!/bin/bash

fetch_wavs() {
  CHARS=("a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k" "l" "m" "n" "o" "p" "q" "r" "s" "t" "u" "v" "w" "x" "y" "z")
  for CHAR in "${CHARS[@]}"
  do
    CMD="curl 'https://0.tqn.com/z/g/german/library/media/Audio/${CHAR}.wav' -H 'Referer: https://www.thoughtco.com/the-german-alphabet-1444644' -H 'Accept-Encoding: identity;q=1, *;q=0' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36' -H 'Range: bytes=0-' -H 'chrome-proxy: frfr' --compressed > ${CHAR}.wav"
    eval $CMD
  done
}


fetch_wavs