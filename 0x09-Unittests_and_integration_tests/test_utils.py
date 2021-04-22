#!/usr/bin/env python3
from parameterized import parameterized, parameterized_class
import unittest
access_nested_map = __import__('utils').access_nested_map
"""this module contains unitests"""


class TestAccessNestedMap(unittest.TestCase):
    """Unitest class"""
    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2)
    ])
    def test_access_nested_map(self, nested_map, path, expected):
        """Unittest for test_access_nested_map"""
        self.assertEquals(access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ({}, ("a",), 'a'),
        ({"a", 1}, ("a", "b"), 'a')
    ])
    def test_access_nested_map_exception(self, nested_map, path, expected):
        """assertRaises keyerror - unit test"""
        with self.assertRaises(KeyError) as err:
            access_nested_map(nested_map, path)
        exc = err.exception
        self.assertEqual(exc.args[0], expected)
