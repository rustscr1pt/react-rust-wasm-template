use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[wasm_bindgen]
pub fn get_sum() -> String {
    format!("2 + 2 = 4")
}


