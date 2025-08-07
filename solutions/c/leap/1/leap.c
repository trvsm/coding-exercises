#include "leap.h"

bool leap_year(int year){
    bool result = false;
    if (year%100 == 0){
        // divisible by 400?
        if(year%400 == 0){
            result = true;
        }
    return result;
    }
    if(year%4 == 0){
        result = true;
    }
    return result;
}
