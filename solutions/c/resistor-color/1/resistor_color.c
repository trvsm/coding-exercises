#include "resistor_color.h"

int color_code(resistor_band_t input){
    return input;
}
resistor_band_t* colors(){
    // static persists the array after the scope of function
    static resistor_band_t result[10] = {BLACK, BROWN, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET, GREY, WHITE};
    return result;
}


