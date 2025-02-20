### Hexlet tests and linter status:
[![Actions Status](https://github.com/Tata332/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Tata332/frontend-project-46/actions)

# Вычислитель отличий

Вычислитель отличий — программа, которая определяет разницу между двумя структурами данных..

# Возможности программы:

- Поддержка входных форматов: json, yaml, yml.
- Генерация отчета в виде plain text, stylish и json

### Вывод справки

Используйте флаг -h или --help для вызова справки

```sh
$ gendiff --help
```
```sh
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```

### Использование

Используйте флаг -f или --format для выбора необходимого форматтера. По умолчанию используется "stylish". Далее укажите пути к сравниваемым файлам. Программа умеет работать как с относительными, так и абсолютными путями.