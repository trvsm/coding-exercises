#include "grains.h"

uint64_t square(uint8_t index){
    long prev = 0;
    if(index == 0){
        return prev;
    }
    prev = 1;
    for(int i = 2; i <= index; i++){
        prev=prev*2;
    }
    return prev;
    }

uint64_t total(void){
        uint64_t acc = 1;
    long prev = 1;
    for(int i = 2; i <= 64; i++){
        prev=prev*2;
        acc += prev;
    }
    return acc;
}