cmake_minimum_required(VERSION 3.5)

project(kata)

set(INCLUDES
    ${PROJECT_SOURCE_DIR}/src
    ${PROJECT_SOURCE_DIR}/vendor
)

set(CFLAGS
    -g -O0 -Werror -std=c++11
)

set(SOURCES
    src/99-bottles.cpp
    test/99-bottles.test.cpp
)

add_executable(test_99-bottles ${SOURCES})
target_compile_options(test_99-bottles PRIVATE ${CFLAGS})
target_include_directories(test_99-bottles PRIVATE ${INCLUDES})
