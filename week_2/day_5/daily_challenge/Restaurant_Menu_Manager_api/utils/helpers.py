def normalize_item_name(name):
    """Normalize item name"""
    if not name:
        return ""
    words = name.strip().lower().split()
    return ' '.join(words)