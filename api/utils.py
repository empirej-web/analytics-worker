import logging

class Utility:
    @staticmethod
    def configure_logger():
        logging.basicConfig(level=logging.INFO,
                            format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                            datefmt='%Y-%m-%d %H:%M:%S',
                            filename='worker.log',
                            filemode='a')

        logger = logging.getLogger(__name__)
        logger.setLevel(logging.INFO)

        return logger

def split_string(input_str, delimiter=','):
    """Splits the input string into a list using the given delimiter."""
    return [x.strip() for x in input_str.split(delimiter)]

def is_empty(s):
    """Checks if the input string is empty."""
    return not s or s.isspace()

def is_none_or_empty(obj):
    """Checks if the input object is None or empty."""
    return obj is None or obj == ''

def get_elapsed_time(start_time):
    """Calculates the elapsed time since the given start time."""
    return (datetime.now() - start_time).total_seconds()