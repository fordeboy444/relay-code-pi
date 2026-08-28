# modal.FilePatternMatcher | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.FilePatternMatcher
- **Summary:** Allows matching file Path objects against a list of patterns.

Copy page

modal.FilePatternMatcher
========================

    class FilePatternMatcher(modal.file_pattern_matcher._AbstractPatternMatcher)

Allows matching file Path objects against a list of patterns.

**Usage**

    from pathlib import Path
    from modal import FilePatternMatcher
    
    matcher = FilePatternMatcher("*.py")
    
    assert matcher(Path("foo.py"))
    
    # You can also negate the matcher.
    negated_matcher = ~matcher
    
    assert not negated_matcher(Path("foo.py"))

    __init__(self, *pattern)

Initialize a new FilePatternMatcher instance.

**Parameters**

\*pattern str

One or more pattern strings.

**Raises**

*   `ValueError`: If an illegal exclusion pattern is provided.

can_prune_directories 

    can_prune_directories(self)

Returns True if this pattern matcher allows safe early directory pruning.

Directory pruning is safe when matching directories can be skipped entirely without missing any files that should be included. This is for example not safe when we have inverted/negated ignore patterns (e.g. ”!\*_/_.py”).

from_file 

    from_file(cls, file_path)

Initialize a new FilePatternMatcher instance from a file.

The patterns in the file will be read lazily when the matcher is first used.

**Parameters**

file_path Path

The path to the file containing patterns.

**Usage**

    from modal import FilePatternMatcher
    
    matcher = FilePatternMatcher.from_file("/path/to/ignorefile")

[modal.FilePatternMatcher](https://modal.com/docs/sdk/py/latest/modal.FilePatternMatcher#modalfilepatternmatcher)
[can_prune_directories](https://modal.com/docs/sdk/py/latest/modal.FilePatternMatcher#can_prune_directories)
[from_file](https://modal.com/docs/sdk/py/latest/modal.FilePatternMatcher#from_file)
